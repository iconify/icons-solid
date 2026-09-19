import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sznxx_but.css';
import '../../css/d/dduzo9-ka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sznxx_but"/><path class="dduzo9-ka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:credit-card-1"} {...others} />);
}

export default Component;
