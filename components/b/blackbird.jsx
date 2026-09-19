import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3hhwvbxz.css';
import '../../css/u/uf2amjwiz.css';
import '../../css/z/zdnax039t.css';
import '../../css/x/xs-3lrjtv.css';
import '../../css/y/ytf-5e_7t.css';
import '../../css/y/yksnw0kmz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="s3hhwvbxz"/><path class="uf2amjwiz"/><path class="zdnax039t"/><path class="xs-3lrjtv"/><path clip-rule="evenodd" class="ytf-5e_7t"/><circle class="yksnw0kmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:blackbird"} {...others} />);
}

export default Component;
