import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zumuhiv5s.css';
import '../../css/j/juc-nsbck.css';
import '../../css/l/loyaa6bql.css';
import '../../css/f/fxf2nmbpb.css';
import '../../css/i/i5iaqdast.css';
import '../../css/u/up8da7gqw.css';
import '../../css/k/k-y_m27jm.css';
import '../../css/z/z72ktgjpp.css';
import '../../css/o/oq0jg0uxq.css';
import '../../css/t/txflhpb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zumuhiv5s"/><path class="juc-nsbck"/><path class="loyaa6bql"/><path class="fxf2nmbpb"/><path class="i5iaqdast"/><path class="up8da7gqw"/><path class="k-y_m27jm"/><path class="z72ktgjpp"/><path class="oq0jg0uxq"/><path class="txflhpb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:centos-logo-solid"} {...others} />);
}

export default Component;
