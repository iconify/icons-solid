import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.nbtmwvp6k {
  cx: 18px;
  cy: 18px;
  r: 8px;
  fill: var(--svg-color--bbddf5, #bbddf5);
}

.q3ncj0etc {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--269, #269);
}
</style><circle class="q3ncj0etc"/><circle class="nbtmwvp6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:radio-button"} {...others} />);
}

export default Component;
