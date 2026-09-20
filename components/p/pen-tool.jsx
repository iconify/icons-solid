import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/g/gpuq2ebyg.css';
import '../../css/z/zl7sn3b2p.css';
import '../../css/u/ug6meybnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="gpuq2ebyg"/><path class="zl7sn3b2p"/><path class="ug6meybnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:pen-tool"} {...others} />);
}

export default Component;
