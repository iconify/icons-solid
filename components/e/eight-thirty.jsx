import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.ep41iwj-n {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M9.34 23a1 1 0 0 0 1.365.367l7.795-4.5a1 1 0 1 0-1-1.732l-7.795 4.5A1 1 0 0 0 9.34 23");
}

.f934iu1fb {
  cx: 18px;
  cy: 18px;
  r: 14px;
  fill: var(--svg-color--e1e8ed, #e1e8ed);
}

.tederrkaj {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M17 29a1 1 0 1 0 2 0V18a1 1 0 1 0-2 0z");
}

.yqfvb1bwf {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--99aab5, #99aab5);
}
</style><circle class="yqfvb1bwf"/><circle class="f934iu1fb"/><path class="tederrkaj"/><path class="ep41iwj-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:eight-thirty"} {...others} />);
}

export default Component;
