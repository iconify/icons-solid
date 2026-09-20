import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.rs2ctkjrn {
  fill: var(--svg-color--fff, #fff);
  d: path("M14.984 6.675h-3.71l-.531 2.132H9.14l-.674 2.704a.57.57 0 0 0 .55.706h1.356L9.1 17.325l4.325-4.574a.569.569 0 0 0-.411-.96h-2.068l.637-2.558h3.49l.46-1.851a.57.57 0 0 0-.102-.487a.57.57 0 0 0-.447-.22");
}

.zvd63uj5o {
  fill: var(--svg-color--ff3d00, #ff3d00);
  d: path("M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18");
}
</style><g class="ft5dv1b6b"><path class="zvd63uj5o"/><path class="rs2ctkjrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:fogo"} {...others} />);
}

export default Component;
