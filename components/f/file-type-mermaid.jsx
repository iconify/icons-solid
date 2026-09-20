import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ivzshm1nf {
  fill: var(--svg-color--fd366e, #fd366e);
  d: path("M29.973 4.478A14.24 14.24 0 0 0 16 13.842c-2.107-5.82-7.787-9.628-13.973-9.364a14.25 14.25 0 0 0 6.2 12.36a7.65 7.65 0 0 1 3.316 6.32v4.376h8.916V23.16a7.65 7.65 0 0 1 3.315-6.32a14.25 14.25 0 0 0 6.2-12.36z");
}
</style><path class="ivzshm1nf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-mermaid"} {...others} />);
}

export default Component;
