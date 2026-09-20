import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un0iyyxii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="un0iyyxii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:search-zoom-in-filled"} {...others} />);
}

export default Component;
