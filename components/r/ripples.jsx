import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iyra6dtwy {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM17 10.5q.544 0 1.047-.166q.503-.167.953-.461V5.616q0-.231-.192-.424T18.384 5h-4.257q-.294.45-.46.953T13.5 7q0 1.458 1.021 2.479T17 10.5");
}
</style><path class="iyra6dtwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ripples"} {...others} />);
}

export default Component;
