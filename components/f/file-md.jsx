import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di8ni_dks.css';
import '../../css/z/z_6vl9bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="di8ni_dks"/><path class="z_6vl9bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:file-md"} {...others} />);
}

export default Component;
