import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9pnqvblw.css';
import '../../css/p/pj9xxzb1g.css';
import '../../css/u/u9cf46b1b.css';
import '../../css/s/sea2qkwxq.css';
import '../../css/n/nrjimxp5q.css';
import '../../css/l/lgcho0bzj.css';
import '../../css/i/ip466nb9w.css';
import '../../css/i/ivw7dbcle.css';
import '../../css/a/akvk2xbsp.css';
import '../../css/e/ehnc-9zya.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/be_-c3buc.css';
import '../../css/y/yp0m9-b0f.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="y9pnqvblw"/><circle class="pj9xxzb1g"/><circle class="u9cf46b1b"/><circle class="sea2qkwxq"/><circle class="nrjimxp5q"/><circle class="lgcho0bzj"/><path class="ip466nb9w"/><path class="ivw7dbcle"/><path class="akvk2xbsp"/><circle class="ehnc-9zya"/><g class="jn8qy4bru"><path class="be_-c3buc"/><path class="yp0m9-b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:volcano-eruption"} {...others} />);
}

export default Component;
