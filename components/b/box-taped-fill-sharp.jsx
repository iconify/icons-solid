import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qsv696bze {
  fill: currentColor;
  d: path("m9.758 3.107l-1.129-.558l2.928-1.446c.279-.137.607-.137.886 0L21 5.329l-3.371 1.665Zm-3.387.558l9 4.444L12 9.774L3 5.329ZM11 11.51v11.111l-8.443-4.169A1 1 0 0 1 2 17.556V7.066Zm2 0l9-4.444v10.49a1 1 0 0 1-.557.896L13 22.621Z");
}
</style><path class="qsv696bze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:box-taped-fill-sharp"} {...others} />);
}

export default Component;
