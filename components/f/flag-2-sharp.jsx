import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n8utxbseb {
  fill: currentColor;
  d: path("M6 21V4h14l-2.096 4.27L20 12.538H7V21z");
}
</style><path class="n8utxbseb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flag-2-sharp"} {...others} />);
}

export default Component;
