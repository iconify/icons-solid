import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flfbxac5m.css';
import '../../css/u/u7znvqguw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="flfbxac5m"/><path class="u7znvqguw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:coffee-beans-filled"} {...others} />);
}

export default Component;
