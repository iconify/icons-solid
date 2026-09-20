import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un_rqmbfz.css';
import '../../css/j/ju2zpyrzh.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="un_rqmbfz"/><circle class="ju2zpyrzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:information"} {...others} />);
}

export default Component;
