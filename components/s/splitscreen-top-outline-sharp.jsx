import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft7496cia {
  fill: currentColor;
  d: path("M4 10.616v-6h16v6zm0 8.769v-6h16v6zm1-1h14v-4H5z");
}
</style><path class="ft7496cia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:splitscreen-top-outline-sharp"} {...others} />);
}

export default Component;
