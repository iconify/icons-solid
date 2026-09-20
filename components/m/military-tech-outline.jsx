import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jfps1qbfa {
  fill: currentColor;
  d: path("M7.385 2.577h9.23v7.08q0 .537-.288.997t-.777.754l-3.358 2.023l.739 2.377h2.877l-2.37 1.661l.931 2.916L12 18.573l-2.37 1.812l.931-2.916l-2.369-1.661h2.877l.739-2.377l-3.397-1.985q-.488-.275-.757-.754q-.27-.479-.27-1.034zm1 1v6.08q0 .29.144.53t.394.394l2.577 1.508V3.577zm7.23 0H12.5v8.512l2.577-1.508q.25-.154.394-.394t.144-.53zM12.5 7.833");
}
</style><path class="jfps1qbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:military-tech-outline"} {...others} />);
}

export default Component;
