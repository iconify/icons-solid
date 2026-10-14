import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.kz9hmkbbi {
  fill: var(--svg-color--c6c6c6, #c6c6c6);
  d: path("M29.5 5.5H18.2l-2.1 4.2H4.3v16.8h25.2zm-2.1 18.7H6.6V11.8h20.8zm0-14.5h-8.2l1-2.1h7.1zm-1.7 4H.5l3.8 12.8h25.2z");
}

.njemojbzm {
  fill: var(--svg-color--dedede, #dedede);
  stroke: var(--svg-color--000, #000);
  stroke-width: var(--svg-stroke-width--2-032px, 2.032px);
  d: path("m21.91 13.73l5.86 3.38v6.78l-5.86 3.38l-5.87-3.38v-6.78z");
}

.q4pgz8b8l {
  fill: var(--svg-color--dedede, #dedede);
  d: path("M21.91 10L31 15.25v10.5L21.91 31l-9.09-5.25v-10.5z");
}
</style><path class="kz9hmkbbi"/><path class="q4pgz8b8l"/><path class="njemojbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:folder-type-skill-opened"} {...others} />);
}

export default Component;
