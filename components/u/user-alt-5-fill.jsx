import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4skdrktw.css';
import '../../css/t/tioi38l2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4skdrktw"/><path class="tioi38l2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:user-alt-5-fill"} {...others} />);
}

export default Component;
