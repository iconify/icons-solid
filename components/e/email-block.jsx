import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xs7dh3-er.css';
import '../../css/q/qpbk08zdt.css';
import '../../css/k/kc38scbvr.css';
import '../../css/q/qphacqbpf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJEktceEy"><g class="s9cl3zbei"><path class="xs7dh3-er"/><circle class="qpbk08zdt"/><path class="kc38scbvr"/><path class="qphacqbpf"/></g></mask></defs><path mask="url(#SVGJEktceEy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:email-block"} {...others} />);
}

export default Component;
