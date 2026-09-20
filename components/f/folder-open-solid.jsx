import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biy8w7b2k.css';
import '../../css/g/gq5qxpyae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="biy8w7b2k"/><path class="gq5qxpyae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:folder-open-solid"} {...others} />);
}

export default Component;
