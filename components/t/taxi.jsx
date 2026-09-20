import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg1wvhb_r.css';
import '../../css/j/j-6v1gb2z.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="jg1wvhb_r"/><path class="j-6v1gb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:taxi"} {...others} />);
}

export default Component;
