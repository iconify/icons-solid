import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n54j-_bne {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 5.5v13q0 2.25 2.25 2.25h16q2.25 0 2.25-2.25V8q0-2.25-2.25-2.25h-8.64L9.586 3.531q-.053-.065-.119-.118t-.142-.089t-.158-.055Q9.084 3.25 9 3.25H4q-2.25 0-2.25 2.25m11.841 4.781l1.378 1.378q.66.659.66 1.591t-.66 1.591l-1.378 1.378q-.659.66-1.591.66t-1.591-.66l-1.378-1.378q-.66-.659-.66-1.591t.66-1.591l1.378-1.378q.659-.66 1.591-.66t1.591.66");
}
</style><path class="n54j-_bne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:component-library"} {...others} />);
}

export default Component;
