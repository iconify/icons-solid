import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3ox6q7or {
  fill: currentColor;
  d: path("M2.692 18.308V6.462h1.693v11.846zm2.539 0V6.462h1.692v11.846zm2.538 0V6.462h.847v11.846zm2.539 0V6.462H12v11.846zm2.538 0V6.462h2.539v11.846zm3.385 0V6.462h.846v11.846zm2.538 0V6.462h2.539v11.846z");
}
</style><path class="m3ox6q7or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:barcode-rounded"} {...others} />);
}

export default Component;
