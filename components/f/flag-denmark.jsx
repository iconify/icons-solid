import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.au_v0abxr {
  fill: var(--svg-color--eee, #eee);
  d: path("M15 5h-4v11H0v4h11v11h4V20h21v-4H15z");
}

.eu9egmb2l {
  fill: var(--svg-color--c60c30, #c60c30);
  d: path("M32 5H15v11h21V9a4 4 0 0 0-4-4M15 31h17c2.209 0 4-1.791 4-4.5V20H15zM0 20v6.5C0 29.209 1.791 31 4 31h7V20zM11 5H4a4 4 0 0 0-4 4v7h11z");
}
</style><path class="eu9egmb2l"/><path class="au_v0abxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-denmark"} {...others} />);
}

export default Component;
