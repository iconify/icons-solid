import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bmvemnbfk.css';
import '../../css/o/o78455-pr.css';
import '../../css/b/b604ze8hf.css';
import '../../css/b/bt6djctfl.css';
import '../../css/u/un92x6bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="bmvemnbfk"/><path class="o78455-pr"/><path class="b604ze8hf"/><path class="bt6djctfl"/><path class="un92x6bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:first-aid-plaster"} {...others} />);
}

export default Component;
