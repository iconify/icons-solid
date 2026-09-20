import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.hhc1xw5st {
  fill: var(--svg-color--be1931, #be1931);
  d: path("M21 24a3 3 0 0 1-6 0V5a3 3 0 1 1 6 0z");
}

.ibazdcbva {
  cx: 18px;
  cy: 32px;
  r: 3px;
  fill: var(--svg-color--be1931, #be1931);
}
</style><circle class="ibazdcbva"/><path class="hhc1xw5st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:exclamation-mark"} {...others} />);
}

export default Component;
