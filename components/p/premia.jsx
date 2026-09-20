import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chgr1c-1p {
  fill: var(--svg-color--5293fe, #5293fe);
  d: path("M7.9 7.5h8.182c.467 0 .737.495.467.86l-3.824 5.01c-.28.366-.005.878.462.878h3.441a.57.57 0 0 0 .461-.225l3.801-5.061a.54.54 0 0 0 0-.652L17.5 3.794a.57.57 0 0 0-.462-.23H6.962a.57.57 0 0 0-.462.224L3.11 8.31a.54.54 0 0 0 0 .652l8.429 11.246a.58.58 0 0 0 .922 0l1.72-2.3a.54.54 0 0 0 0-.652L7.446 8.36c-.275-.365 0-.86.461-.86z");
}
</style><path class="chgr1c-1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:premia"} {...others} />);
}

export default Component;
