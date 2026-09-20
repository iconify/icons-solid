import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.z3iwqlbsl {
  stroke: var(--svg-color--000, #000);
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--4-48px, 4.48px);
  d: path("m27.76 16.56l-11.2 11.2m8.96-23.52L4.24 25.52");
}
</style><path class="z3iwqlbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-light-shadcn"} {...others} />);
}

export default Component;
