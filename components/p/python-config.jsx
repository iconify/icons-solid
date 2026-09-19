import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnh7u9f3r.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nmjmojrlk.css';
import '../../css/s/s_619eb4q.css';
import '../../css/b/biiv_obtj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gnh7u9f3r"/><g class="t_2lkqbxb"><path class="nmjmojrlk"/><path class="s_619eb4q"/><path class="biiv_obtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:python-config"} {...others} />);
}

export default Component;
