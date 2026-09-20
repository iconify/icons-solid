import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fmn8yub-d {
  fill: none;
  stroke: currentColor;
  stroke-dashoffset: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qauhsqbek {
  d: path("M29.509 3.223c7.852 6.56 6.725 18.239-.013 23.553c-6.003 4.735-10.197 8.507-7.63 14.653c1.494 2.97 5.05 4.856 11.762 1.754M13.101 27.338C8.345 22.211 5.463 14.218 9.747 7.96");
}

.rs-j0qbjd {
  d: path("M45.5 24A21.5 21.5 0 0 1 24 45.5A21.5 21.5 0 0 1 2.5 24A21.5 21.5 0 0 1 24 2.5A21.5 21.5 0 0 1 45.5 24");
}

.to19tobkq {
  d: path("M27.97 2.87c1.598 15.105-11.474 12.28-14.87 24.468c-1.365 4.903 2.146 14.407 9.308 18.061");
}
</style><g class="fmn8yub-d"><path class="rs-j0qbjd"/><path class="to19tobkq"/><path class="qauhsqbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vita-pharmacy"} {...others} />);
}

export default Component;
