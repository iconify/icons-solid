import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.hwpe7vb4w {
  fill: currentColor;
  d: path("M3 14C3 7.925 7.925 3 14 3c2.024 0 3.92.547 5.549 1.5H14v1h6.983c.547.45 1.051.953 1.503 1.5H14v1h9.221q.466.715.82 1.5H14v1h10.432q.244.73.387 1.5H14v1h10.955a11 11 0 0 1 .034 1.5H14v1h10.899q-.106.769-.313 1.5H14v1h10.25q-.305.782-.722 1.5H14v1h8.875q-.596.812-1.325 1.5H14v1h6.326A10.95 10.95 0 0 1 14 25C7.925 25 3 20.075 3 14");
}
</style><path class="hwpe7vb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:blur-28-filled"} {...others} />);
}

export default Component;
