import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv2k8ptcj.css';
import '../../css/r/rm4r7y8ko.css';
import '../../css/f/fixn44brh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv2k8ptcj"/><path class="rm4r7y8ko"/><path class="fixn44brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:vault"} {...others} />);
}

export default Component;
