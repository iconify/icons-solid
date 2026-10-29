import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdb_vssxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdb_vssxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:star-x"} {...others} />);
}

export default Component;
