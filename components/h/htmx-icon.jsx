import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":168};
const content = `<style>.ibfzhtryg {
  fill: var(--svg-color--111, #111);
  d: path("M181.395 42.749L256 74.204v21.858l-74.605 31.017l-5.917-21.497l55.169-20.705l-55.169-20.784zm-106.79-.001L0 74.204v21.858l74.605 31.017l5.917-21.497l-55.169-20.705l55.169-20.784z");
}

.l6uzi97cb {
  fill: var(--svg-color--4065c5, #4065c5);
  d: path("M144.34 0h25.664L112.99 167.111H85.996z");
}
</style><path class="ibfzhtryg"/><path class="l6uzi97cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:htmx-icon"} {...others} />);
}

export default Component;
