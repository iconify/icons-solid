import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8fzu_bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8fzu_bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrows-reload-01"} {...others} />);
}

export default Component;
