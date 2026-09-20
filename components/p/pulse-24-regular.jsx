import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c921qwa3i {
  fill: currentColor;
  d: path("m8.462 6.81l3.284 13.616c.178.737 1.211.775 1.443.054l3.257-10.122l.586 2.095a.75.75 0 0 0 .722.548h3.494a.75.75 0 0 0 0-1.5h-2.925l-1.105-3.95c-.2-.717-1.208-.736-1.436-.028l-3.203 9.957L9.224 3.574c-.182-.757-1.255-.769-1.454-.016l-2.1 7.943H2.75a.75.75 0 0 0 0 1.5h3.496a.75.75 0 0 0 .725-.558z");
}
</style><path class="c921qwa3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pulse-24-regular"} {...others} />);
}

export default Component;
