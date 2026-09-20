import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hwwtidbuu {
  fill: currentColor;
  d: path("M15.942 20.423V14.5h-9.5v-11h5v7h6.347v8.23h2.769v1.693zM13.866 16.5H4.442v-13h1v12h8.424z");
}
</style><path class="hwwtidbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:airline-seat-legroom-normal-outline-sharp"} {...others} />);
}

export default Component;
