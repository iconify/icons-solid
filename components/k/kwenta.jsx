import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qykgvefws.css';
import '../../css/i/ixcmx5bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qykgvefws"/><path class="ixcmx5bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kwenta"} {...others} />);
}

export default Component;
