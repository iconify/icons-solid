import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znayi4bdb.css';
import '../../css/g/g8dz_qbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="znayi4bdb"/><path class="g8dz_qbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:signout"} {...others} />);
}

export default Component;
