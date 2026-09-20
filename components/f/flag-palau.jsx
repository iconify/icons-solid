import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.b-ywjgbde {
  fill: var(--svg-color--4aadd6, #4aadd6);
  d: path("M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.e1d3tjb9v {
  cx: 14.8px;
  cy: 18px;
  r: 8px;
  fill: var(--svg-color--ffde00, #ffde00);
}
</style><path class="b-ywjgbde"/><circle class="e1d3tjb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-palau"} {...others} />);
}

export default Component;
