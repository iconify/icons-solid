import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn2mq9eik.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zn2mq9eik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:easel-fill"} {...others} />);
}

export default Component;
