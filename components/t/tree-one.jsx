import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/i5lwzjcxg.css';
import '../../css/b/bpt2z3gew.css';
import '../../css/t/thz3lmbza.css';
import '../../css/d/dhxko4tgr.css';
import '../../css/o/o_s4hwb4m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPbaNNcyr"><g class="s9cl3zbei"><ellipse class="i5lwzjcxg"/><path class="bpt2z3gew"/><path class="thz3lmbza"/><path class="dhxko4tgr"/><path class="o_s4hwb4m"/></g></mask></defs><path mask="url(#SVGPbaNNcyr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tree-one"} {...others} />);
}

export default Component;
