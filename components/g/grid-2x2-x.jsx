import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxf16j32g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxf16j32g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:grid-2x2-x"} {...others} />);
}

export default Component;
