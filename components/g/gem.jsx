import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw6200j4z.css';
import '../../css/w/wc91698rw.css';
import '../../css/y/yyx7rstls.css';
import '../../css/o/od2ezkbuh.css';
import '../../css/s/sfy-0ki3x.css';
import '../../css/d/djvmkacib.css';
import '../../css/i/iaoosul_i.css';
import '../../css/f/f4v8xub9s.css';
import '../../css/r/r7zkcpfkn.css';
import '../../css/k/kzgxrpbaf.css';
import '../../css/q/qdjl1xrvb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qw6200j4z"/><path class="wc91698rw"/><path class="yyx7rstls"/><path class="od2ezkbuh"/><path class="sfy-0ki3x"/><path class="djvmkacib"/><path class="iaoosul_i"/><path class="f4v8xub9s"/><path class="r7zkcpfkn"/><path class="kzgxrpbaf"/><path class="qdjl1xrvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:gem"} {...others} />);
}

export default Component;
