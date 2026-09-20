import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi2419bxd.css';
import '../../css/h/hcenjub2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xi2419bxd"/><path class="hcenjub2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-light"} {...others} />);
}

export default Component;
