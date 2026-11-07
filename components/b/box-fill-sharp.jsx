import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wmmlnc-cy {
  fill: currentColor;
  d: path("M4.129 5.887L3 5.329l8.557-4.226c.279-.137.607-.137.886 0L21 5.329l-9 4.445ZM2 7.066l9 4.444v11.111l-8.443-4.169A1 1 0 0 1 2 17.556Zm11 4.444l9-4.444v10.49a1 1 0 0 1-.557.896L13 22.621Z");
}
</style><path class="wmmlnc-cy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:box-fill-sharp"} {...others} />);
}

export default Component;
