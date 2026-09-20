import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/z/zytxhabmg.css';
import '../../css/w/w04oxtb6f.css';
import '../../css/s/s5lmtybxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="zytxhabmg"/><path class="w04oxtb6f"/><path class="s5lmtybxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:programming-bug-2"} {...others} />);
}

export default Component;
