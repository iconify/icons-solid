import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/z8rqlrb4w.css';
import '../../css/s/s2p4zacxn.css';
import '../../css/o/oyh43sbch.css';
import '../../css/f/ffgnsvq3f.css';
import '../../css/h/h9ppiibnu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="z8rqlrb4w"/><path class="s2p4zacxn"/><path class="oyh43sbch"/><path class="ffgnsvq3f"/><path class="h9ppiibnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:creation-date-sort"} {...others} />);
}

export default Component;
