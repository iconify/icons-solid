import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tx83anpwf {
  fill: currentColor;
  d: path("M15.942 20.423V14.5h-8q-.632 0-1.066-.434q-.434-.433-.434-1.066V3.5h5v7h4.847q.632 0 1.066.434q.434.433.434 1.066v6.73h1.807q.439 0 .7.243q.262.243.262.604t-.262.604t-.7.242zM13.866 16.5H6.058q-.69 0-1.153-.462t-.463-1.153V3.5h1v11.385q0 .23.193.423q.192.192.423.192h7.808z");
}
</style><path class="tx83anpwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:airline-seat-legroom-normal-outline"} {...others} />);
}

export default Component;
