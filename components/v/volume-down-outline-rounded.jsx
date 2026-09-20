import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yksxnj5nb {
  fill: currentColor;
  d: path("M9 15H6q-.425 0-.712-.288T5 14v-4q0-.425.288-.712T6 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T12.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.512.013T16 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2M12 8.85L9.85 11H7v2h2.85L12 15.15zM9.5 12");
}
</style><path class="yksxnj5nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:volume-down-outline-rounded"} {...others} />);
}

export default Component;
