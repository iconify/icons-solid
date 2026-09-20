import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/w/wr7ibjbvd.css';
import '../../css/a/ai2ml-bsx.css';
import '../../css/w/w1hfonltf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="wr7ibjbvd"/><path class="ai2ml-bsx"/><path class="w1hfonltf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:virtual-machine-3"} {...others} />);
}

export default Component;
