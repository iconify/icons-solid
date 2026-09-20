import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf-hwtb-u.css';
import '../../css/z/z39rqtbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tf-hwtb-u"/><path class="z39rqtbcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:search-circle-alternate-bold"} {...others} />);
}

export default Component;
