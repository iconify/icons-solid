import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/umtjdhond.css';
import '../../css/z/zixei8vrl.css';
import '../../css/o/ojgvokbgw.css';
import '../../css/h/h33kknb8l.css';
import '../../css/g/g1yntm0_r.css';
import '../../css/h/h_6fzbbqw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="umtjdhond"/><path clip-rule="evenodd" class="zixei8vrl"/><path clip-rule="evenodd" class="ojgvokbgw"/><path class="h33kknb8l"/><path class="g1yntm0_r"/><path class="h_6fzbbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rocket"} {...others} />);
}

export default Component;
